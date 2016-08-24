package cn.edu.dlnu.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import jdk.nashorn.internal.ir.RuntimeNode.Request;

public class LoginInterceptor implements HandlerInterceptor {
	// 进入Handler方法之前执行
	//用于身份认证，身份授权
	//比如身份认证，
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		System.out.println("HandlerInterceptor1...preHandle");
		//获取请求的url
		StringBuffer url = request.getRequestURL();
		//公开地址是登录提交的地址
		if(url.indexOf("login.action")>=0){
			//如果进行登录提交，放行
			return true;
		}
		//判断session
		HttpSession session = request.getSession();
		String username = (String) session.getAttribute("username");
		if(username!=null){
			//身份存在放行，
			return true;
		}
		//执行这里表示用户身份需要验证，跳转登录页面
		request.getRequestDispatcher("/WEB-INF/jsp/index.jsp").forward(request,response);
		//return false表示拦截请求不在向下执行，return true放行
		return false;
	}

	// 进入Handler方法之后，返回ModelAndView之前执行
	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		System.out.println("HandlerInterceptor1...postHandle");
		// TODO Auto-generated method stub

	}

	// Handler方法完成之后执行
	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		System.out.println("HandlerInterceptor1...afterCompletion");
		// TODO Auto-generated method stub

	}

}
