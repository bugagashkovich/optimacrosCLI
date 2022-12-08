import { get_allAuto } from "./requests/get_allAutos";
import { get_auto } from "./requests/get_auto";
import { post_auto } from "./requests/post_auto";
import { createInterface } from "readline";
import { IAuto } from "./interface/auto";
import { delete_auto } from "./requests/delete_auto";
import { put_auto } from "./requests/put_auto";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const args = process.argv.slice(2);
console.log("__________");

switch (args[0]) {
  // Секция помощи
  case "help":
    console.log("Раздел помощи");
    console.log("_____");

    console.log("getall - Получить все машины без сортировки.");
    console.log("getall {sort}- Получить все машины с сортировкой");
    console.log("Сортировка работает по команде fieldUp или fieldDown");
    console.log("Например brandUp, nameDown etc");

    console.log(
      "Если __v не равен 0, значит у данной машины есть история изменений"
    );

    console.log("_____");

    console.log("get {id}", "Получить машину по id с историей изменений");
    console.log("_____");

    console.log("post - Добавить машину ");
    console.log("_____");

    console.log("put {id} - Обновить машину по id");
    console.log("Система защищена от изменения устаревших данных");

    console.log("_____");

    console.log("delete {id} - Удалить машину с историей изменений по id");
    console.log("Система защищена от удаления устаревших данных");

    rl.close();
    break;

  // Получить все машины или одну по id
  case "getall":
    if (!args[1]) {
      console.log("Все машины без сортировки");
      const exec = async () => {
        const res = await get_allAuto();
        console.table(res.data, [
          "_id",
          "brand",
          "name",
          "prodDate",
          "price",
          "__v",
        ]);
      };
      exec();
    } else {
      console.log("Получить все машины с сортировкой");
      const exec = async (args: string) => {
        const res = await get_allAuto(args);
        console.table(res.data, [
          "_id",
          "brand",
          "name",
          "prodDate",
          "price",
          "__v",
        ]);
      };
      exec(args[1]);
    }
    rl.close();
    break;

  // Получить машину по id
  case "get":
    if (!args[1]) {
      console.log("Требуется id");
    } else {
      const exec = async (args: string) => {
        const res = await get_auto(args);
        if (res.status === 200) {
          console.table(
            [res.data],
            ["_id", "status", "brand", "name", "prodDate", "price", "__v"]
          );
          console.log("История изменений");
          console.table(res.data.oldVersions, [
            "_id",
            "status",
            "brand",
            "name",
            "prodDate",
            "price",
          ]);
        } else {
          console.log("Что-то пошло не так");
          console.log(res.response.data);
        }
      };
      exec(args[1]);
    }
    rl.close();
    break;

  // Добавить машину
  case "post":
    const data: IAuto = {
      brand: null,
      price: null,
      name: null,
      prodDate: null,
    };
    const exec = async () => {
      const brandQ = () => {
        return new Promise((resolve) => {
          rl.question("Введите бренд: ", (answer) => {
            data.brand = answer;
            resolve(null);
          });
        });
      };

      const nameQ = () => {
        return new Promise((resolve) => {
          rl.question("Введите название: ", (answer) => {
            data.name = answer;
            resolve(null);
          });
        });
      };

      const prodQ = () => {
        return new Promise((resolve) => {
          rl.question(
            "Введите дату производства в формате YYYY-MM-DD: ",
            (answer) => {
              const _answer: Date = new Date(answer);
              console.log(answer);

              data.prodDate = _answer;
              resolve(null);
            }
          );
        });
      };

      const priceQ = () => {
        return new Promise((resolve) => {
          rl.question("Введите стоимость: ", (answer) => {
            const _answer = Number(answer);
            data.price = _answer;
            resolve(null);
          });
        });
      };

      await brandQ();
      await nameQ();
      await prodQ();
      await priceQ();
      rl.close();
      const res = await post_auto(data);
      if (res.status === 200) {
        console.log("Результат:");
        console.table(
          [res.data],
          ["_id", "brand", "name", "prodDate", "price"]
        );
      } else {
        console.log("Что-то пошло не так");
        console.log(res.response.data);
      }
    };
    exec();

    break;

  // Обновить машину по id
  case "put":
    if (!args[1]) {
      console.log(args[0], "Требуется id");
    } else {
      const exec = async () => {
        const res_get = await get_auto(args[1]);
        const newAuto: IAuto = {
          brand: res_get.data.brand,
          name: res_get.data.name,
          prodDate: res_get.data.prodDate,
          price: res_get.data.price,
        };
        console.log("Данные к изменению");
        console.table(
          [res_get.data],
          ["_id", "brand", "name", "prodDate", "price", "__v"]
        );

        const brandQ = () => {
          return new Promise((resolve) => {
            rl.question("Введите бренд: ", (answer) => {
              if (answer.length) {
                newAuto.brand = answer;
              }
              resolve(null);
            });
          });
        };

        const nameQ = () => {
          return new Promise((resolve) => {
            rl.question("Введите название: ", (answer) => {
              if (answer.length) {
                newAuto.name = answer;
              }
              resolve(null);
            });
          });
        };

        const prodQ = () => {
          return new Promise((resolve) => {
            rl.question(
              "Введите дату производства в формате YYYY-MM-DD: ",
              (answer) => {
                if (answer.length) {
                  const _answer: Date = new Date(answer);
                  if (_answer) {
                    newAuto.prodDate = _answer;
                  }
                }
                resolve(null);
              }
            );
          });
        };

        const priceQ = () => {
          return new Promise((resolve) => {
            rl.question("Введите стоимость: ", (answer) => {
              if (answer.length) {
                const _answer = Number(answer);
                newAuto.price = _answer;
              }

              resolve(null);
            });
          });
        };
        console.log("Чтобы оставить поле неизменным просто введите Enter");

        await brandQ();
        await nameQ();
        await prodQ();
        await priceQ();
        rl.close();
        console.log(newAuto);

        const res_put = await put_auto({ id: args[1], data: newAuto });
        if (res_put.status === 200) {
          console.log("Результат:");
          console.table(
            [res_put.data],
            ["_id", "brand", "name", "price", "prodDate", "__v"]
          );
        } else {
          console.log("Что-то пошло не так");
          console.log(res_put.response.data);
        }
      };
      exec();
    }

    break;

  // Удалить машину по id
  case "del":
    if (!args[1]) {
      console.log("Требуется id");
    } else {
      console.log("Удалить машину по id");
      const exec = async () => {
        const res = await delete_auto(args[1]);
        if (res.status === 200) {
          console.table([res.data]);
        } else {
          console.log("Что-то пошло не так");
          console.log(res.response.data);
        }
      };
      exec();
    }
    rl.close();
    break;

  default:
    console.log(
      "Что-то пошло не так. Введите help для получения списка команд"
    );
}
