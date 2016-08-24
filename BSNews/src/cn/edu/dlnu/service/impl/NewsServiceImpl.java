package cn.edu.dlnu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.dlnu.mapper.NewsCustomMapper;
import cn.edu.dlnu.mapper.NewsMapper;
import cn.edu.dlnu.po.News;
import cn.edu.dlnu.po.NewsCustom;
import cn.edu.dlnu.service.NewsService;

public class NewsServiceImpl implements NewsService{
	@Autowired
	private NewsCustomMapper newsCustomMapper;
	@Autowired
	private NewsMapper newsMapper;
	/**
	 * 查询热门新闻的前10条
	 */
	@Override
	public List<NewsCustom> findByClickRatio() {
		// TODO Auto-generated method stub
		return newsCustomMapper.findByClickRatio();
	}
	@Override
	public News selectByPrimaryKey(Integer newsId) {
		// TODO Auto-generated method stub
		return newsMapper.selectByPrimaryKey(newsId);
	}
	
}
