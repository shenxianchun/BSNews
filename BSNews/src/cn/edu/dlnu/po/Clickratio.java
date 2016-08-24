package cn.edu.dlnu.po;

import java.util.Date;

public class Clickratio {
    private Integer id;

    private Integer clickratio;

    private Date clicktime;

    private Integer nid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getClickratio() {
        return clickratio;
    }

    public void setClickratio(Integer clickratio) {
        this.clickratio = clickratio;
    }

    public Date getClicktime() {
        return clicktime;
    }

    public void setClicktime(Date clicktime) {
        this.clicktime = clicktime;
    }

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }
}