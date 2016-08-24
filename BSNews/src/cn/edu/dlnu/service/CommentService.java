package cn.edu.dlnu.service;

import java.util.List;

import cn.edu.dlnu.po.Comment;
import cn.edu.dlnu.po.CommentCustom;
import cn.edu.dlnu.po.CommentQueryVo;

public interface CommentService {
	//添加评论，并返回自增主键
	public Integer insert(Comment comment)throws Exception;
	//查询所有评论
	public List<CommentCustom> findCommentsList(CommentCustom commentCustom)throws Exception;
	//点赞
	public void updateByPrimaryKeySelective(CommentCustom commentCustom)throws Exception;
	
}
