module.exports = function orders(options){

	this.add('area:orders, cmd:test', function(msg, done){
		done(null, {replay: 'this is a test for orders-plugin'})
	})

	this.add('area:orders, cmd:fetch', function(msg, done){
		this.make('orders').list$({id:msg.id}, done)
	})

	this.add('area:orders, cmd:remove', function(msg, done){
		this.make('orders').remove$({id:msg.id}, done)
	})

}