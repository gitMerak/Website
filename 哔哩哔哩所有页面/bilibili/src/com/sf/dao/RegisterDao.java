package com.sf.dao;

import com.sf.entity.userEntity;

/**
 * 注册接口
 */
public interface RegisterDao {
    /**
     *先根据用户名查询出是否有此用户 如果没有 即可注册
     * @param user
     * @return
     */
    public int Register(userEntity user );
}
