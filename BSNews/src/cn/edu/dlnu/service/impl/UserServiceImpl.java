package cn.edu.dlnu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;


import cn.edu.dlnu.mapper.UserCustomMapper;
import cn.edu.dlnu.mapper.UserMapper;
import cn.edu.dlnu.po.User;
import cn.edu.dlnu.po.UserCustom;

import cn.edu.dlnu.service.UserService;

public class UserServiceImpl implements UserService{
	@Autowired
	private UserCustomMapper userCustomMapper;
	@Autowired
	private UserMapper userMapper;
	//用户登录
	@Override
	public UserCustom findByNameAndPassword(UserCustom userCustom) throws Exception {
		
		return userCustomMapper.findByNameAndPassword(userCustom);
	}
	@Override
	public User selectByPrimaryKey(Integer newsId) {
		// TODO Auto-generated method stub
		return userMapper.selectByPrimaryKey(newsId);
	}
	//注册用户
	@Override
	public Integer insert(UserCustom userCustom) throws Exception {
		// TODO Auto-generated method stub
		return userMapper.insert(userCustom);
	}
	
}
