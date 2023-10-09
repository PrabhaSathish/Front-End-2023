function calculate()
		{
			// Calculate the Total, Percentage and Grades:

			var s1,s2,s3,s4,s5,total,per;

			s1=parseInt(document.frm1.sub1.value);
			s2=parseInt(document.frm1.sub2.value);
			s3=parseInt(document.frm1.sub3.value);
			s4=parseInt(document.frm1.sub4.value);
			s5=parseInt(document.frm1.sub5.value);

			total=s1+s2+s3+s4+s5;

			per=total*100/500;

			document.frm1.total.value=total;

			document.frm1.per.value=per;

			// Display the Grades:

			if(per>=90)
			{
				document.frm1.grade.value="A+";
			}
			else if(per>=80)
			{
				document.frm1.grade.value="A";
			}
			else if(per>=70)
			{
				document.frm1.grade.value="B";
			}
			else if(per>=60)
			{
				document.frm1.grade.value="C";
			}
			else if(per>=50)
			{
				document.frm1.grade.value="D";
			}
			else 
			{
				document.frm1.grade.value="Fail";
			}
				
			//Display the Name,Class,Marks and Grades in MarkSheet:

			let studentName = document.getElementById("fname").value;
			document.getElementById("disp_name").innerHTML = studentName;

			let studentClass = document.getElementById("stuClass").value;
			document.getElementById("disp_class").innerHTML = studentClass;

			let subject1 = document.getElementById("sub1").value;
			document.getElementById("subj1").innerHTML = subject1;

			let subject2 = document.getElementById("sub2").value;
			document.getElementById("subj2").innerHTML = subject2;

			let subject3 = document.getElementById("sub3").value;
			document.getElementById("subj3").innerHTML = subject3;

			let subject4 = document.getElementById("sub4").value;
			document.getElementById("subj4").innerHTML = subject4;

			let subject5 = document.getElementById("sub5").value;
			document.getElementById("subj5").innerHTML = subject5;

			let subject6 = document.getElementById("sub6").value;
			document.getElementById("subj6").innerHTML = subject6;

			let stutotal = document.getElementById("total").value;
			document.getElementById("total1").innerHTML = stutotal;

			let perct = document.getElementById("per").value;
			document.getElementById("per1").innerHTML = perct;

			let grades = document.getElementById("grade").value;
			document.getElementById("grade1").innerHTML = grades;

			
		}
