package cn.edu.dlnu.mapper;


import cn.edu.dlnu.po.NewsCustom;

import java.util.List;


public interface NewsCustomMapper {
    public List<NewsCustom> findByClickRatio();
}