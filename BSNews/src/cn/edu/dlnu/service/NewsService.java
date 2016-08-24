package cn.edu.dlnu.service;

import java.util.List;

import cn.edu.dlnu.po.News;
import cn.edu.dlnu.po.NewsCustom;

public interface NewsService {
	public List<NewsCustom> findByClickRatio();
	public News selectByPrimaryKey(Integer newsId);
}
