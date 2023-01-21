import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { resolve } from 'path'

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': resolve('./src/components'),
			'@lib': resolve('./src/lib'),
			'@markdown': resolve('./markdown')
		}
	}
}

export default config
