import * as source from '@radix-ui/colors'

const colors = Reflect.ownKeys(source).reduce(
	(colors, name) => Object.assign(colors, source[name]),
	{}
)

export { colors }
