package com.mobilePhoneShop.backend.repo.mobilePhoneCategory;

import com.mobilePhoneShop.backend.model.mobilePhoneCategory.PhoneCategorySave;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhoneCategorySaveRepo extends MongoRepository<PhoneCategorySave,String> {
}
