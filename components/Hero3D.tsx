"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 9], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[6, 4, 6]} intensity={35} color="#ff5c1f" />
          <pointLight position={[-6, -3, 4]} intensity={20} color="#f5c26b" />
          <ShardField />
          <Particles />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-ink)_88%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm tracking-[0.2em] text-accent-soft"
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          K.P — EDITOR &amp; STORYTELLER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          RAW FOOTAGE.
          <br />
          <span className="text-gradient">CINEMATIC</span>
          <br />
          RESULTS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 max-w-xl text-base text-fog sm:text-lg"
        >
          I cut short films, influencer vlogs and cinematic edits that make
          content feel expensive — sharp pacing, clean sound, and a grade that
          pops. CapCut-native workflow, delivered fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-soft hover:shadow-[0_0_30px_rgba(255,92,31,0.4)]"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line bg-panel/60 px-7 py-3.5 text-sm font-semibold text-mist backdrop-blur transition-all hover:border-accent hover:text-accent"
          >
            Book a session
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 border-t border-line pt-6 font-mono text-xs tracking-widest text-fog"
        >
          <span className="text-accent">CREDITS:</span> GOKUL SRINIVASAN
          <span className="mx-2 text-accent">•</span> MUNDHINAM PAARTHENEY
          <span className="mx-2 text-accent">•</span> DAILY VLOGS
          <span className="mx-2 text-accent">•</span> CINEMATIC EDITS
        </motion.div>
      </div>
    </section>
  );
}

function ShardField() {
  const group = useRef<THREE.Group>(null);

  const shards = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 9 - 2
      ),
      scale: 0.12 + Math.random() * 0.42,
      speed: 0.1 + Math.random() * 0.5,
      wire: Math.random() > 0.75,
      variant: Math.floor(Math.random() * 3),
    }));
  }, []);

  const colors = ["#ff5c1f", "#f5c26b", "#ffffff"];

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.06;
    group.current.children.forEach((mesh, i) => {
      const s = shards[i];
      mesh.rotation.x = t * s.speed;
      mesh.rotation.z = t * s.speed * 0.8;
    });
  });

  return (
    <group ref={group}>
      {shards.map((s, i) => (
        <mesh key={i} position={s.pos} scale={s.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={colors[s.variant]}
            emissive={colors[s.variant]}
            emissiveIntensity={s.wire ? 0.5 : 0.3}
            metalness={0.9}
            roughness={0.15}
            wireframe={s.wire}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 34;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ff8a50"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}
