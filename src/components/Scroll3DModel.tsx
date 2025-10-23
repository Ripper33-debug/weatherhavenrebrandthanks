'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Scroll3DModel() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      '/Greenopenmodel.glb',
      (gltf) => {
        console.log('GLB model loaded successfully');
        const model = gltf.scene;
        model.scale.set(3, 3, 3); // Made larger
        model.position.set(0, 0, 0);
        model.castShadow = true;
        model.receiveShadow = true;
        
        // Add a simple material to make it more visible
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x00ff00, // Bright green for visibility
              metalness: 0.3,
              roughness: 0.4
            });
          }
        });
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        scene.add(model);
        modelRef.current = model;
        setIsLoaded(true);
        console.log('3D model added to scene');
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading GLB model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (modelRef.current) {
        // Get scroll progress (0 to 1)
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = Math.min(scrollTop / documentHeight, 1);
        
        // Rotate around Z-axis based on scroll
        const rotationAngle = scrollProgress * Math.PI * 4; // 2 full rotations
        modelRef.current.rotation.z = rotationAngle;
        
        // Optional: Add slight Y rotation for more dynamic effect
        modelRef.current.rotation.y = scrollProgress * Math.PI * 0.5;
        
        // Optional: Scale based on scroll
        const scale = 1 + (scrollProgress * 0.5);
        modelRef.current.scale.setScalar(scale);
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 5,
        pointerEvents: 'none',
        background: 'rgba(0, 0, 0, 0.1)' // Slight background to see if component is rendering
      }}
    />
  );
}
