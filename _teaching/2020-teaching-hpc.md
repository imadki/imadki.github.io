---
title: "Parallel & Distributed Computing"
title_fr: "Calcul Parallèle & Distribué"
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

<div class="lang-en-block" markdown="1">
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
</div>

<div class="lang-fr-block" markdown="1">
Ce cours offre un aperçu complet du calcul haute performance. En partant du matériel informatique et de l'architecture des supercalculateurs modernes, le cours aborde l'intensité de calcul, la localité des données, la pénalité de stride, les hiérarchies mémoire (cache et RAM) et le blocking matriciel. Les stratégies parallèles pour la mémoire partagée et distribuée sont discutées. Les métriques de performance telles que l'accélération et l'efficacité, ainsi que la loi d'Amdahl et la loi de Gustafson, sont introduites pour analyser la parallélisabilité. Les sujets incluent la programmation parallèle avec OpenMP (boucles parallèles, variables partagées/privées) et MPI (communications point-à-point et collectives, bloquantes et non-bloquantes). Les étudiants appliquent ces techniques à des problèmes de calcul scientifique en CFD et en science des données.

## Aperçu du Programme

**1. Introduction au Calcul Parallèle**
- Qu'est-ce que le HPC ?
- Brève introduction au matériel
- Supercalculateurs modernes
- Infrastructures HPC : Cloud, Edge et HPC Cloud
- Métriques et Modèles de Performance

**2. Localité des Données**
- Intensité de Calcul
- Modèle à Deux Niveaux de Mémoire
  - Localité des Données
  - La Pénalité de Stride
  - Tableaux Multidimensionnels
  - Principes d'une bonne localité des données

**3. Penser Parallèle**
- Concurrence et Parallélisme
- Conception d'Algorithmes Parallèles
- Architecture Informatique
- Architectures Mémoire Parallèles
- Modèles et Outils de Programmation Parallèle
- Performance et Scalabilité

**4. Programmation à Mémoire Partagée avec OpenMP**
- Introduction et principes
- Constructs de partage de travail
- Mécanismes de synchronisation
- Tâches OpenMP et dépendances de tâches
- Affinité des threads
- Considérations de performance

**5. Programmation à Mémoire Distribuée avec MPI**
- Architectures à Mémoire Distribuée & MPI
- Communications point-à-point
- Communications collectives
- Modes de communication (synchrone, asynchrone, bufférisé, etc.)
- Communication unilatérale
- Types de données dérivés
- Communicateurs

</div>
