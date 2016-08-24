package cn.edu.dlnu.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.dlnu.mapper.CommentCustomMapper;
import cn.edu.dlnu.mapper.CommentMapper;

import cn.edu.dlnu.po.Comment;
import cn.edu.dlnu.po.CommentCustom;
import cn.edu.dlnu.po.CommentQueryVo;
import cn.edu.dlnu.service.CommentService;

public class CommentServiceImpl implements CommentService{
	@Autowired
	private CommentMapper commentMapper;
	@Autowired
	private CommentCustomMapper commentCustomMapper;
	@Override
	public Integer insert(Comment comment) throws Exception {
		return commentCustomMapper.insert(comment);
	}
	@Override
	public List<CommentCustom> findCommentsList(CommentCustom commentCustom) throws Exception {
		// TODO Auto-generated method stub
		return commentCustomMapper.findCommentsList(commentCustom);
	}
	@Override
	public void updateByPrimaryKeySelective(CommentCustom commentCustom) throws Exception {
		// TODO Auto-generated method stub
	
		commentMapper.updateByPrimaryKeySelective(commentCustom);
	}
}
