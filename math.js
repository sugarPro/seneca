module.exports = function math(options){

	this.add('area:math, cmd:sum', function(msg, done){
		done(null, {replay:msg.left + msg.right})
	})

	this.add('area:math, cmd:product', function(msg, done){
		done(null, {replay:msg.left * msg.right})
	})

	this.add('area:math, cmd:sum, integer:true', function(msg, done){
		this.act('area:math, cmd:sum', {left:Math.floor(msg.left), right:Math.floor(msg.right)}, done)
	})

	this.wrap('area:math', function(msg, done){
		msg.left  = Number(msg.left).valueOf()
		msg.right = Number(msg.right).valueOf()
		this.prior(msg, done);
	})

}