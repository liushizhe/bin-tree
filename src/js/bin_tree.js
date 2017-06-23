
define(function() {
	//Node object
	//include data, branch left and right
	function Node(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
	//Binary Tree list
	//root node,insert node, search node in previous, inner post
	function BinTreeList(node) {
		this.root = node;
		this.insert = function (data) {
			var node = new Node(data, null, null);
			if(!this.root) {
				this.root = node;
			} else {
				var curNode = this.root;
				var parentNode;
				while (true) {
					parentNode = curNode;
					if(data < curNode.data) {
						curNode = curNode.left;
						if(!curNode) {
							parentNode.left = node;
							break;
						}
					} else {
						curNode = curNode.right;
						if(!curNode) {
							parentNode.right = node;
							break;
						}
					}
				}
			}
		}

		this.preOrder = function (n, callback) {
			if(n) {
				callback(n);
				this.preOrder(n.firstElementChild, callback);
				this.preOrder(n.lastElementChild, callback);

				// this.preOrder(n.left, callback);
				// this.preOrder(n.right, callback);
			}
		}
		this.inOrder = function (n, callback) {
			if(n) {
				this.inOrder(n.firstElementChild, callback);
				callback(n);
				this.inOrder(n.lastElementChild, callback);

				// this.preOrder(n.left, callback);
				// this.preOrder(n.right, callback);
			}
		}
		this.postOrder = function (n, callback) {
			if(n) {
				this.postOrder(n.firstElementChild, callback);
				this.postOrder(n.lastElementChild, callback);
				
				// this.preOrder(n.left, callback);
				// this.preOrder(n.right, callback);
				callback(n);
			}
		}
	}
	return {
		Node: Node,
		BinTreeList: BinTreeList
	}
});
// var arr = [5, 3, 4, 8, 6, 9];
// var tree = new BinTreeList(null);
// arr.forEach( function(element) {
// 	tree.insert(element);
// });

// function debug(node) {
// 	console.log(node.data);
// }
// console.log('前序：');
// tree.preOrder(tree.root, debug);
// console.log('中序：');
// tree.inOrder(tree.root, debug);
// console.log('后序：');
// tree.postOrder(tree.root, debug);


