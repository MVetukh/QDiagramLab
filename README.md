# QDiagramLab
A Diagrammatic Toolkit for Quantum Processes (Julia)


**Brief:**  
**QDiagramLab** is a research-oriented framework for constructing, transforming, and numerically simulating tensor / string diagrams of quantum processes. The project core is implemented in **Julia** and targets academic research in diagrammatic quantum theory, quantum-circuit optimization, and formal verification of protocols. In the longer term QDiagramLab may evolve into a user-friendly product with a GUI and service layer.

---

## Table of Contents
1. About the project & motivation  
2. Goals and target audience  
3. Features (what it will do) — summary and detailed view  
4. Current implementation status  
5. Technical choices (brief)  
6. Roadmap / upcoming tasks  
7. Research use cases & examples  
8. How to contribute / contact  
9. License  
10. Sources & references

---

## 1. About the project & motivation

Modern quantum theory and quantum technologies operate on two intertwined layers: an abstract (structural, categorical) layer and a numerical (tensor networks, simulation, optimization) layer. The diagrammatic approach (string diagrams, spider calculus, ZX-calculus) provides an intuitive and formally rigorous language to express composition of quantum processes and to prove protocol properties. However, converting a diagram directly into a numerical object (tensor → matrix, optimal contraction order, inclusion of dissipation) is nontrivial.

**QDiagramLab** is conceived as a bridge between:
- the formal diagrammatic language (as developed by Coecke & Kissinger and others), and
- practical numerical workflows (simulator, optimizer, verifier),

so that researchers can:
- author quantum protocols diagrammatically,  
- automatically apply rewrite transformations,  
- compute the resulting matrix / superoperator / Choi state and run numerical analysis (fidelity, entropies, etc.).

**Primary motivation:** combine categorical clarity with algorithmic utility in a single tool to rapidly experiment, verify, and document results.

---

## 2. Goals and target audience

**Project goals**
- Provide a convenient platform to describe and transform quantum-process diagrams.  
- Implement the end-to-end pipeline: diagram → tensor network → efficient contraction → simulation.  
- Expose a simple local API for integration with interactive frontends (for research workflows).

**Target audience**
- Researchers in diagrammatic quantum theory and ZX-calculus.  
- Developers and researchers working on quantum compilers and circuit optimizers.  
- Scientists studying formal verification of quantum protocols (teleportation, entanglement manipulations, channels).  
- Students and instructors who want interactive examples from Coecke & Kissinger’s diagrammatic approach.

---

## 3. Features (what it will do)

### High-level summary
- **Diagram model**: nodes / ports / wires / types with validation and serialization.  
- **Rewrite engine**: pattern matching and rule application (spider fusion, cups/caps, ZX rules, etc.).  
- **Tensorizer**: translation of diagrams into tensor networks and calculation of the resulting operator.  
- **Simulator**: dense and tensor-network execution paths; common metrics like fidelity, partial trace, entropy.  
- **I/O & visualization**: JSON import/export for diagrams, HDF5/NPZ for large tensors, SVG/TikZ visualization.  
- **Local API**: HTTP / WebSocket endpoints for frontend integration and interactive notebooks.

### Detailed planned features
- **Diagrams as first-class objects**: serialization, type checks, composite boxes and nested diagrams.  
- **Core rewrite rules**: standard algebraic rules from diagrammatic quantum theory plus user-defined rules and strategies.  
- **Contraction order optimization**: heuristics (greedy, treewidth-based) and backend selection (dense, ITensors).  
- **Channel support**: CPTP maps, Choi/Jamiołkowski transforms, composition of channels.  
- **Performance profiler**: execution time, peak memory, and backend recommendations.  
- **Step-by-step proof mode**: present the sequence of rewrites applied with a visual proof export.  
- **Unit-test suite**: canonical examples from Coecke & Kissinger (teleportation, GHZ, spider fusion).

---

## 4. Current status

**Implemented so far:**  
- Nothing implemented yet — this repository currently contains the project specification, high-level design, and roadmap.

**Planned minimal deliverables for the MVP:**
- Core data types for diagrams (Node, Port, Wire, Diagram).  
- JSON schema for diagram representation and a parser.  
- A demonstrational tensorizer mapping a small set of generators to tensors and performing dense contractions.  
- A demo HTTP endpoint `/evaluate` that returns a simple computed matrix (placeholder).

> The project README and roadmap will be updated as development advances and implementation milestones are reached.

---

## 5. Technical choices (brief)

- **Language & core:** Julia — selected for its high performance for numerical work and its ecosystem for categorical algebra (Catlab.jl) and tensor operations.  
- **Tensor engine:** planned use of `TensorOperations.jl`, `ITensors.jl`, and (optionally) CUDA.jl for GPU acceleration. Contraction planning will follow heuristics similar to `opt_einsum`.  
- **Rewrite engine:** a graph-based pattern-matcher and replacer inspired by DisCoPy and PyZX; implemented on top of native Julia graph/data structures.  
- **API layer:** local HTTP/WebSocket server using `HTTP.jl` for frontend and notebook integration.  
- **Storage & IO:** JSON for diagram exchange and HDF5 / NPZ for binary tensors and large results.  
- **Frontend (optional):** React + Electron or Pluto.jl demo notebooks for interactive use.

---

## 6. Roadmap / next tasks

**MVP (0–2 months)**
- [ ] Define in-code types: `Node`, `Port`, `Wire`, `Diagram`.  
- [ ] Create a JSON schema for diagrams and implement a parser.  
- [ ] Implement a simple tensorizer for a small set of generators and a dense contraction path.  
- [ ] Implement a demo HTTP endpoint `/evaluate`.

**v1 (2–6 months)**
- [ ] Implement the rewrite engine with basic rules (spider fusion, cups/caps).  
- [ ] Add unit tests for canonical examples from the reference book.  
- [ ] Add contraction-order optimizations and a profiler.  
- [ ] Add SVG/TikZ export and proof export.

**v2 (6–12 months)**
- [ ] Add a tensor-network backend (ITensors).  
- [ ] Build a GUI (React/Electron) with drag & drop and step-by-step rewrite visualizer.  
- [ ] Integrate ZX calculus and import/export with PyZX/DisCoPy formats.  
- [ ] Add support for CPTP channels and basic open-system models.

---

## 7. Research use cases & example scenarios

1. **Protocol verification:** author a teleportation diagram, apply rewrites, evaluate numerically, and verify the resulting operator matches expectations.  
2. **Circuit optimization:** apply diagrammatic rewrite heuristics to reduce gate counts and prove equivalence.  
3. **ZX-calculus research:** explore automated rule application and search for optimal reductions.  
4. **Compositional channel analysis:** study composition of channels and reasoning about mixed states and noise models in a compositional framework.  
5. **Teaching & demos:** interactive notebooks demonstrating core diagrammatic arguments and how they map to matrices.

---

## 8. How to contribute / contact

Contributions are welcome. Suggested workflow:
1. Fork the repository.  
2. Create a branch describing your feature or fix.  
3. Submit a pull request with tests and usage examples.

**Good first contributions**
- Implement the JSON diagram parser.  
- Add unit tests for teleportation and GHZ diagrams (numeric checks).  
- Implement a basic spider-fusion rewrite rule.

**Contact / Maintainer**
- [Add your email / GitHub profile / ORCID here]

---

## 9. License

The project is planned to be released under the **MIT License** (see `LICENSE` in the repository). License can be revised as the project grows.

---

## 10. Sources & references

Primary reference and conceptual foundation:

> Bob Coecke and Aleks Kissinger. *Picturing Quantum Processes — A First Course in Quantum Theory and Diagrammatic Reasoning.* Cambridge University Press, 2017.  
> ISBN: 978-1-107-11386-6.

Additional useful references and toolkits:
- **PyZX** — ZX-calculus automation and rewriting (useful algorithms and heuristics).  
- **DisCoPy** — Python toolbox for string diagrams and categorical composition.  
- **Catlab.jl / AlgebraicJulia** — Julia libraries for categorical algebra and wiring diagrams.  
- Literature on tensor-network libraries and contraction optimization (`ITensors`, `TensorOperations`).

---

**Note:** This README is the initial official project documentation. The "Implemented" section currently reflects that the repository contains design documents and a roadmap; it will be updated as code and features are completed. If you want, I can now produce a ready-to-commit `README.md` file and create the first skeleton files (Julia `Project.toml`, `src/` layout, and a simple `server.jl` demo) for a starter repository.

