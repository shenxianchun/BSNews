package cn.edu.dlnu.mapper;

import cn.edu.dlnu.po.Clickratio;
import cn.edu.dlnu.po.ClickratioExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ClickratioMapper {
    int countByExample(ClickratioExample example);

    int deleteByExample(ClickratioExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Clickratio record);

    int insertSelective(Clickratio record);

    List<Clickratio> selectByExample(ClickratioExample example);

    Clickratio selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Clickratio record, @Param("example") ClickratioExample example);

    int updateByExample(@Param("record") Clickratio record, @Param("example") ClickratioExample example);

    int updateByPrimaryKeySelective(Clickratio record);

    int updateByPrimaryKey(Clickratio record);
}