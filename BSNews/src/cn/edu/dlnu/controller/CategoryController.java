package cn.edu.dlnu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.edu.dlnu.po.CategoryCustom;

import cn.edu.dlnu.service.CategoryService;

@Controller
@RequestMapping("/category")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	@RequestMapping("/findAll")
	@ResponseBody
	public List<CategoryCustom> findAll(){
		List<CategoryCustom> list = categoryService.findAll();
		return list;
	}
}
