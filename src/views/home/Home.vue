<template>
	<div class="home">
		<van-nav-bar style="background-color: #FF5777;" >
			<template #left>
				<van-icon name='arrow-left' color="#FFFFFF" size="1rem">
				</van-icon>
				<span style="color: #FFFFFF;font-size: 1rem;padding-left: .1rem;">返回</span>
			</template>
			<template #title>
				<span style="color: #FFFFFF;">标题</span>
			</template>
		</van-nav-bar>
		
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>1</van-swipe-item>
		  <van-swipe-item>2</van-swipe-item>
		  <van-swipe-item>3</van-swipe-item>
		  <van-swipe-item>4</van-swipe-item>
		</van-swipe>
		
	</div>
</template>

<script>
	// @ is an alias to /src
	import Vue from 'vue';
	import {
		NavBar,
		Icon,
		Swipe, 
		SwipeItem
	} from 'vant';
	Vue.use(NavBar)
	Vue.use(Icon)
	Vue.use(Swipe);
	Vue.use(SwipeItem);

	export default {
		name: 'Home',
		components: {},
		methods: {

		},
	}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
