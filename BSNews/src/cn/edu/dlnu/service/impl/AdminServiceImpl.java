package cn.edu.dlnu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.dlnu.mapper.AdminCustomMapper;

import cn.edu.dlnu.po.Admin;
import cn.edu.dlnu.service.AdminService;

public class AdminServiceImpl implements AdminService{
	@Autowired
	private 
	AdminCustomMapper adminCustomMapper;
	@Override
	public Admin login(Admin admin) throws Exception {
		// TODO Auto-generated method stub
		return adminCustomMapper.selectAdmin(admin);
	}


}
