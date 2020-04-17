import router from '@/router'
import { getToken } from '@/utils/common/auth'

router.beforeEach(async (to,from,next)=>{
	// 获取token
	const hasToken = getToken()
	if(hasToken){
		if(to.path === '/login'){
			// 已经登录，跳转到首页
			next({path:'/'})
		}else{
			next()
		}
	}else{
		if(to.meta.isOpen){
			// 开放页面，无需验证
			next()
		}else{
			// other pages that do not have permission to access are redirected to the login page.
			next(`/login?redirect=${to.path}`)
		}
	}
})