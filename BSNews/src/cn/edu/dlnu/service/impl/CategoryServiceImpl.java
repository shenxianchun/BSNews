package cn.edu.dlnu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.dlnu.mapper.CategoryCustomMapper;
import cn.edu.dlnu.po.CategoryCustom;

import cn.edu.dlnu.service.CategoryService;

public class CategoryServiceImpl implements CategoryService{
	@Autowired
	private CategoryCustomMapper categoryCustomMapper;
	@Override
	public List<CategoryCustom> findAll() {
		return categoryCustomMapper.findAll();
	}

}
