import React, { useState } from "react";

const Uploaded = () => {
  const [data, setData] = useState([
    {
      id: 1,
      url: "timesonline.co.uk",
      code: "QB0GaK7",
      categories: ["Technology", "Fashion", "Food"],
      tags: [],
    },
    {
      id: 2,
      url: "merriam-webster.com",
      code: "8oUTDyz",
      categories: ["Technology", "Fashion", "Food", "Health"],
      tags: [],
    },
    {
      id: 3,
      url: "newyorker.com",
      code: "Z9i2o9o",
      categories: ["Technology", "Fashion", "Food", "Travel"],
      tags: [],
    },
    {
      id: 4,
      url: "angelfire.com",
      code: "pW44f49",
      categories: ["Technology", "Fashion", "Food", "Art"],
      tags: [],
    },
    {
      id: 5,
      url: "rambler.ru",
      code: "w1vDJvP",
      categories: ["Technology", "Fashion", "Food"],
      tags: [],
    },
  ]);

  const [selectedCategories, setSelectedCategories] = useState({});

  const handleCategoryChange = (id, selectedCategory) => {
    setSelectedCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      if (updatedCategories[id]) {
        updatedCategories[id] = [...updatedCategories[id], selectedCategory];
      } else {
        updatedCategories[id] = [selectedCategory];
      }

      return updatedCategories;
    });
  };

  const list = ["SI No", "Links", "Prefix", "Add Tags"];
  return (
    <div className="mt-8 mb-10">
      <p className="text-3xl font-semibold">Uploads</p>
      <div className="mt-10">
        <div className="overflow-x-scroll">
          <div className="bg-[#F2F2F2] rounded-xl w-full h-[500px] px-8 min-w-[100%]">
            <ul className="flex justify-between mt-4 font-semibold text-base lg:text-xl">
              <li>SI No</li>
              <li>Links</li>
              <li>Prefix</li>
              <li>Add Tags</li>
              <li className="mr-16">Selected Tags</li>
            </ul>

            <div className="space-y-5 mt-10">
              {data.map((item, index) => (
                <ul
                  className="flex justify-between text-ms items-center lg:text-base font-medium overflow-x-auto px-2 bg-[#ffff] gap-y-10 h-[60px] lg:w-full"
                  key={index}
                >
                  <li className="w-[40px]">{item.id}</li>
                  <li className="w-[40px]">{item.url}</li>
                  <li>{item.code}</li>
                  <li>
                    <select
                      name={`categories-${item.id}`}
                      id={`categories-${item.id}`}
                      onChange={(e) =>
                        handleCategoryChange(item.id, e.target.value)
                      }
                      value={selectedCategories[item.id] || ""}
                    >
                      {item.categories.map((tag, tagIndex) => (
                        <option key={tagIndex} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li>
                    <div className="flex gap-x-3 items-center">
                      {selectedCategories[item.id] && (
                        <>
                          {selectedCategories[item.id].map(
                            (selectedTag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className="w-[60px] lg:w-[80px] h-[25px] lg:h-[30px] text-ms lg:text-base font-light bg-blue-600 flex justify-center items-center rounded-xl text-white"
                              >
                                {selectedTag}
                                <ion-icon
                                  class="text-white"
                                  name="close-outline"
                                ></ion-icon>
                              </div>
                            )
                          )}
                        </>
                      )}
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
