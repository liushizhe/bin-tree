define(['./bin_tree'], function(bin_tree) {
	var time = 0;
	function selectBlock(node) {
		// node.data.style.backgroundColor = 'transparent' = '#fff';
		setTimeout(function() {
			node.style.backgroundColor = '#f00';
		}, time+=500);
		setTimeout(function() {
			node.style.backgroundColor = '#fff';
		}, time+=500);
	}

	function start() {
		var eleRoot = document.getElementsByClassName('root')[0];
		var root = new bin_tree.Node(eleRoot, eleRoot.firstElementChild, eleRoot.lastElementChild);
		var list = new bin_tree.BinTreeList(root);
		
		document.getElementsByClassName('btn-pre')[0].addEventListener("click", function() {
			list.preOrder(eleRoot, selectBlock);
			time = 0;
		});
		document.getElementsByClassName('btn-inn')[0].addEventListener("click", function() {
			list.inOrder(eleRoot, selectBlock);
			time = 0;
		});
		document.getElementsByClassName('btn-post')[0].addEventListener("click", function() {
			list.postOrder(eleRoot, selectBlock);
			time = 0;
		});
	}

	return {start: start}
});