[Tutorial that i have followed](https://www.youtube.com/watch?v=2W_VR92Pqgs&list=PLpepLKamtPjiUF6PvVUbIFhx9HaS0qJs_)

**Required Packages**

`npm install three @react-three/fiber @react-three/drei @react-three/postprocessing leva`

`@react-three/gltfjsx`

> This package contains some vulnerabilities, as we only need this to generate a jsx file based on provide gltf, we can install this only when we need it, try not to push this to github as github may relentlessly tell you that the project contains a vulnerable script.

**We can locally install it like this, to avoid adding the package to the project**
`npm install @react-three/gltfjsx --no-save`

**We can also uninstall this**
`npm uninstall @react-three/gltfjsx`
