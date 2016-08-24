package cn.edu.dlnu.mapper;

import cn.edu.dlnu.po.UserCustom;


public interface UserCustomMapper {
    public UserCustom findByNameAndPassword(UserCustom userCustom) throws Exception;
}