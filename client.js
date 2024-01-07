// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "Teams/Red", { r: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});
contextedProperties.GetContext().SkinType.Value = 1;
Players.Get"Свой ID").contextedProperties.MaxHp.Value = 214748364

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false;
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value = false;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;
Players.Get("175381CC48705938").inventory.Main.Value =  true;
Players.Get("175381CC48705938").inventory.Secondary.Value = true;
Players.Get("175381CC48705938").inventory.Melee.Value = true;
Players.Get("175381CC48705938").inventory.Explosive.Value = true;
Players.Get("175381CC48705938").inventory.MainInfinity.Value = true;
Players.Get("175381CC48705938").inventory.SecondaryInfinity.Value = true;
Players.Get("175381CC48705938").inventory.Melee.Value = true;
Players.Get("175381CC48705938").inventory.ExplosiveInfinity.Value = true;
Players.Get("175381CC48705938").inventory.Build.Value = true;
Players.Get("175381CC48705938").inventory.BuildInfinity.Value = true;
// вкл строительные опции
Players.Get("175381CC48705938").Build.Pipette.Value = true;
Players.Get("175381CC48705938").Build.FloodFill.Value = true;
Players.Get("175381CC48705938").Build.FillQuad.Value = true;
Players.Get("175381CC48705938").Build.RemoveQuad.Value = true;
Players.Get("175381CC48705938").Build.BalkLenChange.Value = true;
Players.Get("175381CC48705938").Build.FlyEnable.Value = true;
Players.Get("175381CC48705938").Build.SetSkyEnable.Value = true;
Players.Get("175381CC48705938").Build.GenMapEnable.Value = true;
Players.Get("175381CC48705938").Build.ChangeCameraPointsEnable.Value = true;
Players.Get("175381CC48705938").Build.QuadChangeEnable.Value = true;
Players.Get("175381CC48705938").Build.BuildModeEnable.Value = true;
Players.Get("175381CC48705938").Build.CollapseChangeEnable.Value = true;
Players.Get("175381CC48705938").Build.RenameMapEnable.Value = true;
Players.Get("175381CC48705938").Build.ChangeMapAuthorsEnable.Value = true;
Players.Get("175381CC48705938").Build.LoadMapEnable.Value = true;
Players.Get("175381CC48705938").Build.ChangeSpawnsEnable.Value = true;
Players.Get("175381CC48705938").Build.BuildRangeEnable.Value = true;
