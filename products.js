module.exports = function products(options){

	this.add('area:products, cmd:test', function(msg, done){
		done(null, {replay:'this is a test for plugin-products.'})
	})

	this.add('area:products, cmd:fetch', function(msg, done){
		this.make('products').list$({}, done)
	})

	this.add('area:products, cmd:save', function(msg, done){
		this.make('products').data$(msg.data).save$(done)
	})

}