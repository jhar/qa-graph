import * as THREE from 'three'

let time = new THREE.Clock()

const domElement = document.getElementById('graph')
const farClippingPlane = 1000
const fieldOfView = 75
const nearClippingPlane = 0.01

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf7f6f5)
const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  window.innerWidth / window.innerHeight,
  nearClippingPlane,
  farClippingPlane
)
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  canvas: domElement
})

renderer.setSize(window.innerWidth, window.innerHeight)

function sphere(radius, sw, sh, color, opacity) {
  return new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, sw, sh),
    new THREE.MeshBasicMaterial({
      color: color,
      opacity: opacity,
      transparent: true,
      wireframe: true
    })
  )
}

// Recursively instantiate shapes
function shapes(n, base) {
  if (n < base) {
    let rV = Math.random()
    let shape = sphere(
      Math.random(),
      8,
      8,
      new THREE.Color(rV, rV, rV),
      rV * 0.62
    )
    shape.position.set(
      Math.random() * 8 - 4,
      Math.random() * 8 - 4,
      Math.random() * 10 - 5,
    )
    shape.velocity = new THREE.Vector3(
      0,
      0,
      Math.random() * 0.02 - 0.01
    )
    // shape.acceleration = new THREE.Vector3(
    //   Math.random() * 0.0002 - 0.0001,
    //   Math.random() * 0.0002 - 0.0001,
    //   Math.random() * 0.0002 - 0.0001
    // )
    scene.add(shape)
    return shapes(n + 1, base)
  }
}

shapes(0, 99)

// Basic Demo

// let geometry = new THREE.PlaneGeometry(3, 2)
// let material = new THREE.MeshBasicMaterial({
//   color: 0xa7beca,
//   side: THREE.DoubleSide
// })
// let plane = new THREE.Mesh(geometry, material)
// scene.add(plane)

camera.position.z = 5

function renderGraph() {
  requestAnimationFrame(renderGraph)
  scene.traverse(node => {
    if (node.velocity) {
      // node.velocity.add(node.acceleration)
      node.position.add(node.velocity)

      if (node.position.z > 5) {
        node.position.z = -15
      }

      if (node.position.z < -15) {
        node.position.z = 5
      }

    }
  })
  renderer.render(scene, camera)
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}, false)

export default renderGraph
