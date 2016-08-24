package cn.edu.dlnu.controller;




import java.io.File;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import cn.edu.dlnu.po.UserCustom;

import cn.edu.dlnu.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;	
	/**
	 * 登录操作
	 * @param userCustom
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping("/login")
	@ResponseBody
	public UserCustom login(HttpServletRequest request,HttpSession session,@RequestBody UserCustom userCustom) throws Exception{
		UserCustom user = userService.findByNameAndPassword(userCustom);
		if(user!=null){
			session.setAttribute("username", userCustom.getUsername());
		}
		return user;
	}
	//退出
	@RequestMapping("/quit")
	@ResponseBody
	public boolean  quit(HttpSession session)throws Exception{
		boolean flag = false;
		if(session != null){
			session.invalidate();
			flag = true;
		}
		return flag;
	}
	//注册
	@RequestMapping("/regist")
	public String regist(HttpSession session,UserCustom userCustom,MultipartFile user_pic)throws Exception{	
		System.out.println(userCustom.getBirthday());
		//上传图片
		//原始名称
		String originalFileName = user_pic.getOriginalFilename();
		if(user_pic!=null && originalFileName !=null && originalFileName.length()>0){
			//存储图片的物理路径：E:\\develop\\upload\\temp
			String path = "E:\\develop\\upload\\temp\\";
		
			//新的图片名称
			String newFileName = UUID.randomUUID()+originalFileName.substring(originalFileName.lastIndexOf("."));
			//新的图片
			File newFile = new File(path+newFileName);
			//将内存中的数据写到磁盘
			user_pic.transferTo(newFile);
			//将新的图片名称写到userCustom中
			userCustom.setImage(newFileName);
		}
		if(userService.insert(userCustom)>0){
			session.setAttribute("username", userCustom.getUsername());
			return "forward:index.action";
		}
		// 地址重定向url地址栏变化,request不能共享
		// return "redirect:queryItems.action";
		// 页面转发，url地址栏不变，request能共享,再同一个controller中不需要加根路径以及前后缀
		return "registPage.action";
	}
	//返回regist.jsp页面
	@RequestMapping("/registPage")
	public String registPage(){
		return "regist";
	}
	@RequestMapping("/index")
	public String index(){
		return "index";
	}
}
