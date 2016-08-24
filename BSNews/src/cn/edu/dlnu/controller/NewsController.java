package cn.edu.dlnu.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import cn.edu.dlnu.po.NewsCustom;
import cn.edu.dlnu.service.NewsService;
import cn.edu.dlnu.service.UserService;

@Controller
@RequestMapping("/news")
public class NewsController {
	@Autowired
	private NewsService newsService;
	@Autowired
	private UserService userService;
	@RequestMapping("/findByClickRatio")
	@ResponseBody
	public List<NewsCustom> findByClickRatio(){
		return newsService.findByClickRatio(); 
	}
	@RequestMapping("/selectByPrimaryKey/{newsId}")
	public String selectNewsByPrimaryKey(HttpServletRequest request,@PathVariable("newsId") String newsId){
		request.setAttribute("news", newsService.selectByPrimaryKey(Integer.parseInt(newsId)));
		return "news";
	}
	@RequestMapping("/newsIndex/{newsId}/{userId}")
	public String newsIndex(HttpServletRequest request,@PathVariable("newsId")String newsId,@PathVariable("userId")String userId){
		request.setAttribute("news",newsService.selectByPrimaryKey(Integer.parseInt(newsId)));
		request.setAttribute("user", userService.selectByPrimaryKey(Integer.parseInt(userId)));
		return "news";
	}
	@RequestMapping("/newsManagePage")
	public String newsManagePage(){
		return "admin/newsManage";
	}
}
