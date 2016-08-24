package cn.edu.dlnu.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.edu.dlnu.po.Comment;
import cn.edu.dlnu.po.CommentCustom;
import cn.edu.dlnu.po.CommentQueryVo;
import cn.edu.dlnu.service.CommentService;



@Controller
@RequestMapping("/comment")
public class CommentController {
	@Autowired
	private CommentService commentService;
	@RequestMapping("/addComment")
	@ResponseBody
	public Integer addComment(@RequestBody Comment comment)throws Exception{
		System.out.println(comment);
		return commentService.insert(comment);
	}
	@RequestMapping("/findCommentsList")
	@ResponseBody
	public List<CommentCustom> findCommentsList(@RequestBody CommentCustom commentCustom)throws Exception{
		return commentService.findCommentsList(commentCustom);
	}
	@RequestMapping("/updateByPrimaryKeySelective")
	public void updateByPrimaryKeySelective(@RequestBody CommentCustom commentCustom) throws Exception{
		
		commentService.updateByPrimaryKeySelective(commentCustom);
	}
}
