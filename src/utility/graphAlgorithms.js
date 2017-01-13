export function bfs(nodes, root) {
	let active
	let distance = 0
	let obj = { distance, key: root, parent: 'root', visited: true }
	let queue = [obj]
	let tree = [obj]

	while (queue.length > 0) {
		active = queue.shift()
		activeKey = active.key

		if (nodes[activeKey].children) {
			nodes[activeKey].children.forEach(childKey => {
				obj = {
					distance: active.distance + 1,
					key: childKey,
					parent: activeKey,
					visited: true
				}
				
				queue.push(obj)
				tree.push(obj)
			})
		}

	}

	return tree
}
