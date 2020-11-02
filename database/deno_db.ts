import { Database, Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('mongo', {
	uri: <MONGO_URL>,
	database: <DB>
});

class cars extends Model {
	static fields = {
		_id: {
			primaryKey: true
		},
		name: DataTypes.STRING,
		series: DataTypes.STRING
	};
}

db.link([cars]);

export default cars;