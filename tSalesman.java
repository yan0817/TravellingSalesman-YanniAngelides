import java.util.ArrayList;
/**
Implementation of the greedy algorithm
@author Yanni Angelides
@version 02/11/16
*/

public class tSalesman
{
	public ArrayList<Vertice<E>> allV = new ArrayList<Vertice<String>>(10);
	
	public static void main(String [] args)
	{
		Vertice<String> v1 = new Vertice<String>("A",0,3);
		Vertice<String> v2 = new Vertice<String>("B",0,7);
		Vertice<String> v3 = new Vertice<String>("C",1,0);
		Vertice<String> v4 = new Vertice<String>("D",2,0);
		Vertice<String> v5 = new Vertice<String>("E",3,3);
		allV.add(v1);
		allV.add(v2);
		allV.add(v3);
		allV.add(v4);
		allV.add(v5);
		Vertice v = v1;
		System.out.print(v.toString());
		while(done() == false)
		{
			Vetice trav = findShortest(v);
			System.out.print(trav.toString());
			trav.oneVisit();
			v = trav;
		}
	}
	
	public void connectAll()
	{
		int start = 0;
		while(start < allV.length)
		{
			for (int i = start + 1; i < allV.length - 1; i++)
			{
				(allV.get(start)).makeConnection(allV.get(i));
			}
		}
	}
	
	public boolean done()
	{
		for(int i = 0; i < allV.length; i++)
		{
			if(allV.get(i).getVisits() < 1)
			{
				return false;
			}
		}
		return true;
	}
	
	public int findShortest(Vertice v)
	{
		ArrayList<Integer> weights = v.getWeights();
		weights.toString();
		int shortest = 0;
		for (int i = 0; i < weights.length; i++)
		{
			if(weights.get(i) < weights.get(shortest))
			{
				shortest = i;
			}
		}
		return shortest;
	}
	
	public String toString()
	{
		for(int i = 0; i < length; i++)
		{
			System.out.print(this.get(i));
		}
	}
}
