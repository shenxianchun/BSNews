package cn.edu.dlnu.service;




import cn.edu.dlnu.po.User;
import cn.edu.dlnu.po.UserCustom;


public interface UserService {
	public UserCustom findByNameAndPassword(UserCustom userCustom) throws Exception;
	public User selectByPrimaryKey(Integer newsId);
	//注册用户
	public Integer insert(UserCustom userCustom)throws Exception;
}
