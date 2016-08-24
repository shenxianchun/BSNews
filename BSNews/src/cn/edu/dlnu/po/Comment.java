package cn.edu.dlnu.po;

import java.util.Date;

public class Comment {
    private Integer id;

    private Integer uid;

    private Integer nid;

    private String comment;

    private Date publishtime;

    private Integer up;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public Date getPublishtime() {
        return publishtime;
    }

    public void setPublishtime(Date publishtime) {
        this.publishtime = publishtime;
    }

    public Integer getUp() {
        return up;
    }

    public void setUp(Integer up) {
        this.up = up;
    }

	@Override
	public String toString() {
		return "Comment [id=" + id + ", uid=" + uid + ", nid=" + nid + ", comment=" + comment + ", publishtime="
				+ publishtime + ", up=" + up + "]";
	}
    
}