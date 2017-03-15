<template>
</template>
<script>
import Scroll from './scroll'
export default {
	name: 'back-scroll',
	mixins: [Scroll],
	props: {
		flag: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onScroll() {
			const scroller = this.scroller
			const isWindow = scroller === window
			const height = Math.ceil(window.screen.height / 2);
			const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop
			if (scrollTop > height) {
				!this.flag && this.$store.commit('toggle', 1);
			}else{
				this.flag && this.$store.commit('toggle');
			}
		}
	}
}
</script>
