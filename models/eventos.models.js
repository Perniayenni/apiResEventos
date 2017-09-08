var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DatesCalendar',
  port: 8080
});

connection.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('Conexion a mysql correcta.');

  }
});

var EventModel = {
    getEvent : function (callback) {
        connection.query('SELECT * from datos ', function(error, result){
                if(error){
                    throw error;
                }else{
                    var resultado = result;
                    if(resultado.length > 0){
                        callback(result);
                    }else{
                        callback('No hay resultados');
                    }
                }
            }
        );

    },


//var query = connection.query('INSERT INTO datos(title, start, end, color) VALUES('+title+', '+start+', '+end+', '+color+')',
    addEvent : function (Data,callback) {
        console.log('en el models');
        console.log(Data);
        connection.query("INSERT INTO datos(title, start, end, color) VALUES ('"+Data.title+"','"+Data.start+"','"+Data.end+"','"+Data.color+"')",
            function(error, result) {
          console.log(JSON.stringify(error))
                if(error){
                    throw error;
                }else{
                    callback(result);
                }
            }
        );
    },

    getByIdEvent : function (id, callback) {
        connection.query("SELECT * from datos where id = '"+id+"' ",
          function (error,result) {
            console.log(JSON.stringify(result))
              if (error){
                throw error;
              }else{
                callback(result);
              }
          }
        );
    },
    
    updateEvent : function (Data,callback) {
        connection.query("UPDATE datos set title='"+Data.title+"' where id ='"+Data.id+"' ",
            function (error,result) {
            if (error){
              throw error;
            }else{
              callback(result);
            }
        });
    }

};



module.exports = EventModel;
