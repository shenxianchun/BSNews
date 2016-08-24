package cn.edu.dlnu.mapper;

import java.util.List;

import cn.edu.dlnu.po.Comment;
import cn.edu.dlnu.po.CommentCustom;


public interface CommentCustomMapper {
   public Integer insert(Comment comment)throws Exception;
   public List<CommentCustom> findCommentsList(CommentCustom commentCustom)throws Exception;
}