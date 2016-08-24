package cn.edu.dlnu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.edu.dlnu.po.Admin;
import cn.edu.dlnu.service.AdminService;

@Controller
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminServive;
	@RequestMapping("/loginPage")
	public String loginPage(){
		return "managerLogin";
	}
	@RequestMapping("/login")
	public String login(Admin admin) throws Exception{
		Admin ad = adminServive.login(admin);
		if(ad!=null){
			return "admin/adminIndex";
		}else{
			return "loginPage.action";
		}
	}
}
