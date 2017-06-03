module.exports = function wrapNon$UpdateMiddleware (context) {
  return function (next) {
    return function (args, method) {
			var wrap = (args.options || {}).wrapNon$UpdateField
			if (typeof wrap !== 'undefined') {
				delete args.options.wrapNon$UpdateField
			}
      if (wrap !== true || !args.update) {
        return next(args, method)
      }

      if (Object.keys(args.update).some(function (k) {
        return k.indexOf('$') !== 0
      })) {
        args.update = {$set: args.update}
      }

      return next(args, method)
    }
  }
}
