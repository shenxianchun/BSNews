package cn.edu.dlnu.po;

import java.util.List;

public class CommentQueryVo {
		private NewsCustom newsCustom;
		
		private CommentCustom commentCustom;
		
		private List<CommentCustom> list;
		
		public NewsCustom getNewsCustom() {
			return newsCustom;
		}

		public List<CommentCustom> getList() {
			return list;
		}

		public void setList(List<CommentCustom> list) {
			this.list = list;
		}

		public void setNewsCustom(NewsCustom newsCustom) {
			this.newsCustom = newsCustom;
		}

		public CommentCustom getCommentCustom() {
			return commentCustom;
		}
		
		public void setCommentCustom(CommentCustom commentCustom) {
			this.commentCustom = commentCustom;
		}
}