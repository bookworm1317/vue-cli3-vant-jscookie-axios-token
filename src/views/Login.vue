<template>
	<div class="wm-login">
		<van-form @submit="onSubmit">
		  <van-field
		    v-model="username"
		    name="用户名"
		    label="用户名"
		    placeholder="用户名"
		    :rules="[{ required: true, message: '请填写用户名' }]"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    name="密码"
		    label="密码"
		    placeholder="密码"
		    :rules="[{ required: true, message: '请填写密码' }]"
		  />
		  <div style="margin: 16px;">
		    <van-button round block type="info" native-type="submit">
		      提交
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Form,Field,Button,Toast } from 'vant';
	import {request} from '@/network/request.js'
	import {setToken} from '@/utils/common/auth.js'
	
	
	//import axios from 'axios'
	
	Vue.use(Form).use(Field).use(Button).use(Toast)
	
	export default {
		name:'Login',
		data() {
			return {
				username:'',
				password:''
			}
		},
		methods: {
			onSubmit(values) {
				request({
					method:'POST',
					url:'/api/Index/index',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(res=>{
					if(res.code == 100000){
						setToken(res.result.token)
						Toast.success({
							message: '登录成功',
							duration: 1.5 * 1000
						})
						setTimeout(()=>{
							this.$router.replace('/')
						},3000)
						
					}
					console.log(res)
				})
			},
		},
	}
</script>

<style>
	.wm-login{
		position: fixed;
		top: 50%;
		margin-top: -25%;
	}
</style>
