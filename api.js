module.exports = function api(options){

	this.add('role:api, path:calculate', function(msg, done){
		var operation = msg.args.params.operation
		var left = msg.args.query.left
		var right = msg.args.query.right
		this.act('area:math', {cmd:operation,left:left,right:right}, done)
	})

	this.add('role:api, path:products', function(msg, done){
		var operation = msg.args.params.operation
		var data = msg.args.body
		this.act('area:products', {cmd:operation, data:data}, done)
	})

	this.add('role:api, path:orders', function(msg, done){
		var operation = msg.args.params.operation
		var data = msg.args.body
		this.act('area:orders', {cmd:operation, data:data}, done)
	})

	this.add('init:api', function(msg, done){
		//endpoint: ${prefix}/${key}/${postfix}/${suffix}
		this.act('role:web', {
				routes:[{
					pin:'role:api, path:*',
					prefix:'/api',
					map:{
						calculate:{GET:true, suffix:'/:operation'},
						products:{GET:true, POST:true, suffix:'/:operation'},
						orders:{GET:true, POST:true, suffix:'/:operation'}
					}
				}]
			}, done)
	})

}