---
title: "Parallel & Distributed Computing"
collection: teaching
type: "Graduate course"
permalink: /teaching/2020-teaching-hpc
venue: "University Mohammed VI Polytechnic (UM6P)"
date: 2020-01-01
location: "Ben Guerir, Morocco"
role: "Coordinator"
load: "36h/year"
level: "Master (SDAD, MHACS, QFM) and Engineering Cycle (CS School)"
period: "2020–Present"
status: "active"
summary: "Distributed and high-performance computing with MPI, OpenMP, GPU programming, and performance optimization."
summary_fr: "Calcul distribué et haute performance avec MPI, OpenMP, programmation GPU et optimisation des performances."
---

This course offers a complete overview of high-performance computing. Starting with computer hardware and modern supercomputer architecture, the course covers computational intensity, data locality, stride penalty, memory hierarchies (cache and RAM), and matrix blocking. Parallel strategies for shared and distributed memory are discussed. Performance metrics such as speedup and efficiency, along with Amdahl's Law and Gustafson's Law, are introduced for analyzing parallelizability. Topics include parallel programming with OpenMP (parallel loops, shared/private variables) and MPI (point-to-point and collective communications, blocking and non-blocking). Students apply these techniques to scientific computing problems in CFD and data science.

## Curriculum Overview

**1. Introduction to Parallel Computing**
- What is HPC?
- A brief introduction to hardware
- Modern supercomputers
- HPC infrastructures: Cloud, Edge, and HPC Cloud
- Performance Metrics and Models

**2. Data Locality**
- Computational Intensity
- Two Memory Level Model
  - Data Locality
  - The Penalty of Stride
  - High Dimensional Arrays
  - Principles of good data locality

**3. Thinking Parallel**
- Concurrency and Parallelism
- Parallel Algorithm Design
- Computer Architecture Background
- Parallel Memory Architectures
- Parallel Programming Models and Tools
- Performance and Scalability

**4. Shared Memory Programming with OpenMP**
- Introduction and principles
- Worksharing constructs
- Synchronization mechanisms
- OpenMP tasks and task dependencies
- Thread affinity
- Performance considerations

**5. Distributed Memory Programming with MPI**
- Distributed Memory Architectures & MPI
- Point-to-point communications
- Collective communications
- Communication modes (synchronous, asynchronous, buffered, etc.)
- One-sided communication
- Derived datatypes
- Communicators
