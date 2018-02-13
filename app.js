var Express = require('express')
var Seneca = require('seneca')
var Router = Express.Router
var bodyParser = require('body-parser')
var senecaWeb = require('seneca-web')
var senecaWebAdapter = require('seneca-web-adapter-express')

var context = new Router()
var senecaWebConfig = {
	context: context,
	adapter: senecaWebAdapter,
	options: {parseBody: false}
}

var app = Express()
app.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended:true}))
	.use(context)
	.listen(3000)

var seneca = Seneca()
seneca.use(senecaWeb, senecaWebConfig)
	.use('entity')
	.use('api')
	.client({port:3001, pin:'area:products'})
	.client({port:3002, pin:'area:orders'})
	.client({pin:'area:math'})

